import { Suspense } from 'react';
import ErrorBoundary from 'components/error-boundary';
import Loading from 'components/loading';
import 'i18n';
import 'styling/index.css';

const Default: React.FC = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ErrorBoundary>
                <div>
                    <p>Inicial</p>
                </div>
            </ErrorBoundary>
        </Suspense>
    );
};

export default Default;
