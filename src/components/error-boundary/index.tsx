import { Component, ReactNode, lazy } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    public static getDerivedStateFromError(): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(): void {
        this.setState({ hasError: true });
    }

    public render(): ReactNode {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            const ErrorPage = lazy(() => import('views/error-page'));

            return <ErrorPage />;
        }

        return children;
    }
}

export default ErrorBoundary;
