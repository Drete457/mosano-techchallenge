import { useTranslation } from 'react-i18next';
import 'styling/error-page.css';

const ErrorPage: React.FC = () => {
    const [t] = useTranslation();

    return (
        <div>
            <div className="four_zero_four_bg">
                <h1 className="text_center">404</h1>
            </div>

            <div className="contant_box_404">
                <h2>{t('pages.error.lost')}</h2>

                <p>{t('pages.error.page')}</p>

                <button
                    type="button"
                    onClick={() => {
                        window.location.href = '/';
                    }}
                >
                    {t('btn.home')}
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
