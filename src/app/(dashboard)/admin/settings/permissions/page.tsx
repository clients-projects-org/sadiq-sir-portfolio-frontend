'use client';
import React from 'react';
// import { AdminDifficultyLevelList } from '@/store/features/admin';
// import {
// 	DevPermissionCategoryList,
// 	DevPermissionSubCategoryKeys,
// 	DevPermissionSubCategoryList,
// } from '@/store/features/dev-permission';
// import { RoleList } from '@/store/features/role';

const Page = ({ searchParams }: { searchParams: { tab: string } }) => {
	switch (searchParams.tab) {
		// case 'role':
		// 	return <RoleList />;
		// case 'role_category':
		// 	return <DevPermissionCategoryList />;

		// case 'role_sub_category':
		// 	return <DevPermissionSubCategoryList />;

		// case 'keys':
		// 	return <DevPermissionSubCategoryKeys />;

		// case 'difficulty_level':
		// 	return <AdminDifficultyLevelList />;

		default:
			return <div>No Data Found</div>;
	}
};

export default Page;
