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
		label: 'Content',
		key: 'content',
		icon: 'file-text',
		children: [
			{
				label: 'Banners',
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

	// {
	// 	label: 'Settings',
	// 	key: 'settings',
	// 	icon: 'setting',
	// 	children: [
	// 		{
	// 			label: 'Store Settings',
	// 			key: 'store-settings',
	// 			path: '/admin/settings/store',
	// 		},
	// 		{
	// 			label: 'Payment Gateways',
	// 			key: 'payment-settings',
	// 			path: '/admin/settings/payment',
	// 		},
	// 		{
	// 			label: 'Tax & Legal',
	// 			key: 'tax-settings',
	// 			path: '/admin/settings/tax',
	// 		},
	// 		{
	// 			label: 'User Permissions',
	// 			key: 'user-permissions',
	// 			path: '/admin/settings/permissions?tab=role_category',
	// 		},
	// 	],
	// },
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
