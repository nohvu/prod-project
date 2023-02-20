import React, { Suspense } from 'react';
import { useRoutes } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routerConfig";

const AppRouter = () => {
    const elements = useRoutes(Object.values(routeConfig));
    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <div className="page-wrapper">
                { elements }
            </div>
        </Suspense>
    );
};

export default AppRouter;