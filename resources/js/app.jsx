import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { LayoutProvider } from './Contexts/LayoutContext';
import Layout from './Layouts/Layout';

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => {
        const page = resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx'))
        page.layout = Layout;
        return page;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<LayoutProvider {...props}>
            <App {...props} />
        </LayoutProvider>);
    },
    progress: {
        color: '#4B5563',
    },
});
