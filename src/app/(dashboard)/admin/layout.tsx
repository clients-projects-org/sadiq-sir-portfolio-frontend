'use client';
import React, { useState } from 'react';
import { signOut } from 'next-auth/react';
import { Modal } from 'antd';
import {
	PieChartOutlined,
	ShoppingOutlined,
	ShoppingCartOutlined,
	TeamOutlined,
	RocketOutlined,
	BarChartOutlined,
	FileTextOutlined,
	TruckOutlined,
	SettingOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	SearchOutlined,
	BellOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Badge, Button, Input, Layout, Menu, theme } from 'antd';
import Link from 'next/link';

const { Header, Sider, Content } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

const iconMap: Record<string, React.ReactNode> = {
	pie: <PieChartOutlined />,
	shopping: <ShoppingOutlined />,
	'shopping-cart': <ShoppingCartOutlined />,
	team: <TeamOutlined />,
	rocket: <RocketOutlined />,
	'bar-chart': <BarChartOutlined />,
	'file-text': <FileTextOutlined />,
	truck: <TruckOutlined />,
	setting: <SettingOutlined />,
};

type MenuConfig = {
	label: string | React.ReactNode;
	key: string;
	icon?: string;
	path?: string;
	children?: MenuConfig[];
};

const menuConfig: MenuConfig[] = [
	{
		label: 'Dashboard',
		key: 'dashboard',
		icon: 'pie',
		path: '/admin/dashboard',
	},
	{
		label: 'Products',
		key: 'products',
		icon: 'shopping',
		children: [
			{
				label: 'All Products',
				key: 'all-products',
				path: '/admin/products',
			},
			{
				label: 'Add Product',
				key: 'add-product',
				path: '/admin/products/add',
			},
			{
				label: 'Categories',
				key: 'categories',
				path: '/admin/products/categories',
			},
			{
				label: 'Brands',
				key: 'brands',
				path: '/admin/products/brands',
			},
			{
				label: 'Inventory',
				key: 'inventory',
				path: '/admin/products/inventory',
			},
			{
				label: 'Reviews',
				key: 'product-reviews',
				path: '/admin/products/reviews',
			},
		],
	},
	{
		label: 'Orders',
		key: 'orders',
		icon: 'shopping-cart',
		children: [
			{
				label: 'All Orders',
				key: 'all-orders',
				path: '/admin/orders',
			},
			{
				label: 'Returns & Refunds',
				key: 'returns',
				path: '/admin/orders/returns',
			},
			{
				label: 'Abandoned Carts',
				key: 'abandoned-carts',
				path: '/admin/orders/abandoned-carts',
			},
		],
	},
	{
		label: 'Customers',
		key: 'customers',
		icon: 'team',
		children: [
			{
				label: 'Customer List',
				key: 'customer-list',
				path: '/admin/customers',
			},
			{
				label: 'Customer Support',
				key: 'customer-support',
				path: '/admin/customers/support',
			},
			{
				label: 'Reviews',
				key: 'reviews',
				path: '/admin/customers/reviews',
			},
		],
	},
	{
		label: 'Marketing',
		key: 'marketing',
		icon: 'rocket',
		children: [
			{
				label: 'Coupons',
				key: 'coupons',
				path: '/admin/marketing/coupons',
			},
			{
				label: 'Campaigns',
				key: 'campaigns',
				path: '/admin/marketing/campaigns',
			},
			{
				label: 'Email Marketing',
				key: 'email-marketing',
				path: '/admin/marketing/email',
			},
			{
				label: 'SEO',
				key: 'seo',
				path: '/admin/marketing/seo',
			},
		],
	},
	{
		label: 'Analytics',
		key: 'analytics',
		icon: 'bar-chart',
		children: [
			{
				label: 'Sales Reports',
				key: 'sales-reports',
				path: '/admin/analytics/sales',
			},
			{
				label: 'Customer Insights',
				key: 'customer-insights',
				path: '/admin/analytics/customers',
			},
			{
				label: 'Product Performance',
				key: 'product-performance',
				path: '/admin/analytics/products',
			},
		],
	},
	{
		label: 'Content',
		key: 'content',
		icon: 'file-text',
		children: [
			{
				label: 'Banners & Sliders',
				key: 'banners',
				path: '/admin/content/banners',
			},
			{
				label: 'Blog Posts',
				key: 'blog',
				path: '/admin/content/blog',
			},
			{
				label: 'FAQ',
				key: 'faq',
				path: '/admin/content/faq',
			},
			{
				label: 'Menu Items',
				key: 'menu-items',
				path: '/admin/content/menu',
			},
			{
				label: 'Icons',
				key: 'icons',
				path: '/admin/content/icons',
			},
		],
	},
	{
		label: 'Shipping',
		key: 'shipping',
		icon: 'truck',
		children: [
			{
				label: 'Shipping Methods',
				key: 'shipping-methods',
				path: '/admin/shipping/methods',
			},
			{
				label: 'Delivery Partners',
				key: 'delivery-partners',
				path: '/admin/shipping/partners',
			},
		],
	},
	{
		label: 'Settings',
		key: 'settings',
		icon: 'setting',
		children: [
			{
				label: 'Store Settings',
				key: 'store-settings',
				path: '/admin/settings/store',
			},
			{
				label: 'Payment Gateways',
				key: 'payment-settings',
				path: '/admin/settings/payment',
			},
			{
				label: 'Tax & Legal',
				key: 'tax-settings',
				path: '/admin/settings/tax',
			},
			{
				label: 'User Permissions',
				key: 'user-permissions',
				path: '/admin/settings/permissions?tab=role_category',
			},
		],
	},
];
const siderStyle: React.CSSProperties = {
	overflow: 'auto',
	height: '100vh',
	position: 'sticky',
	insetInlineStart: 0,
	top: 0,
	bottom: 0,
	scrollbarWidth: 'thin',
	scrollbarGutter: 'stable',
};
function generateMenuItems(config: MenuConfig[]): MenuItem[] {
	return config.map((item) => {
		const label = item.path ? (
			<Link href={item.path}>{item.label}</Link>
		) : (
			item.label
		);
		return {
			key: item.key,
			icon: item.icon ? iconMap[item.icon] : undefined,
			children: item.children ? generateMenuItems(item.children) : undefined,
			label,
		};
	});
}

const items: MenuItem[] = generateMenuItems(menuConfig);

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	const [collapsed, setCollapsed] = useState(false);
	const handleLogout = () => {
		Modal.confirm({
			title: 'Are you sure you want to logout?',
			okText: 'Logout',
			cancelText: 'Cancel',
			onOk: () => signOut({ callbackUrl: '/auth' }),
		});
	};
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	const profileMenu = (
		<Menu>
			<Menu.Item key="1">Profile</Menu.Item>
			<Menu.Item key="2">Settings</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="3" onClick={handleLogout}>
				Logout
			</Menu.Item>
		</Menu>
	);
	return (
		<Layout className="dashboard-sidebar" style={{ minHeight: '100vh' }}>
			<Sider
				style={siderStyle}
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
			>
				<div className="dashboard-logo">
					<Link className="d-block" href="/admin">
						<img src="/assets/imgs/logo-light.png" alt="Logo" />
					</Link>
				</div>

				<Menu
					theme="dark"
					defaultSelectedKeys={['1']}
					mode="inline"
					items={items}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: '0 24px',
						background: colorBgContainer,
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
						<Button
							type="text"
							icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
							onClick={() => setCollapsed(!collapsed)}
							style={{
								fontSize: '16px',
								width: 48,
								height: 48,
							}}
						/>
						<Input
							prefix={<SearchOutlined />}
							placeholder="Search products, orders..."
							style={{ width: 300 }}
						/>
					</div>

					<div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
						<Badge count={5}>
							<BellOutlined style={{ fontSize: '20px' }} />
						</Badge>

						{/* <Dropdown overlay={profileMenu}>
							<Space>
								<Avatar icon={<UserOutlined />} />
							</Space>
						</Dropdown> */}
					</div>
				</Header>
				<Content style={{ margin: '16px' }}>{children}</Content>
			</Layout>
		</Layout>
	);
};

export default AdminLayout;
