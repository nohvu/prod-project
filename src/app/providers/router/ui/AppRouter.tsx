import React, { Suspense, memo, useMemo } from 'react';
import { useRoutes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);
    const routes = useMemo(() => Object
        .values(routeConfig)
        .filter((route) => !(route.authOnly && !isAuth)), [isAuth]);
    const elements = useRoutes(routes);
    return (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
                { elements }
            </div>
        </Suspense>
    );
};

export default memo(AppRouter);
