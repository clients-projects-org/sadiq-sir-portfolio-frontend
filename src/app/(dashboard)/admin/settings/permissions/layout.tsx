'use client';
import { Breadcrumb, Col, Row } from 'antd';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const menu = [
	{ label: 'Role', tab: 'role' },
	{ label: 'Role Category', tab: 'role_category' },
	{ label: 'Role Sub Category', tab: 'role_sub_category' },
	{ label: 'Keys', tab: 'keys' },
	{ label: 'Difficulty Level', tab: 'difficulty_level' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
	const searchParam = useSearchParams();
	const activeTab = searchParam.get('tab');

	return (
		<>
			<Breadcrumb className="shadow-sm mb-3" style={{ padding: '16px' }}>
				<Breadcrumb.Item>Admin</Breadcrumb.Item>
				<Breadcrumb.Item>Settings</Breadcrumb.Item>
				<Breadcrumb.Item>Course</Breadcrumb.Item>
			</Breadcrumb>
			<Row gutter={20}>
				<Col span={4}>
					<div className="pt-4 pb-4 px-3 shadow-sm rounded h-100 bg-white">
						<ul style={{ position: 'sticky', top: '10px' }}>
							{menu.map((item, index) => (
								<li key={index}>
									<Link
										href={`/admin/settings/permissions?tab=${item.tab}`}
										className={`px-3 py-2 border d-block rounded-lg flex ${
											activeTab === item.tab
												? 'bg-primary text-white'
												: 'bg-white text-black'
										}`}
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</Col>
				<Col span={20} className="shadow-sm p-4 bg-white rounded">
					{children}
				</Col>
			</Row>
		</>
	);
}
