import { NavigationContainerRef } from '@react-navigation/native';
import React from 'react';

export const navigationRef: React.RefObject<NavigationContainerRef<any>> = React.createRef();

export const navigate = (name: string, params?: any) => {
    navigationRef.current?.navigate(name, params);
};

export const resetNavigation = (routes: { name: string; params?: any }[], index = 0) => {
    navigationRef.current?.reset({
        index,
        routes,
    });
};
