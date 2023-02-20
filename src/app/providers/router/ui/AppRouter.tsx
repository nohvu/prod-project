import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => {
    const elements = useRoutes(Object.values(routeConfig));
    return (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
                { elements }
            </div>
        </Suspense>
    );
};

export default AppRouter;
