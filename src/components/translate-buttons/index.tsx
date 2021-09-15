import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

const TranslateButtons: React.FC = () => {
    const [t] = useTranslation();

    return (
        <section className="translation_buttons">
            <button type="button" onClick={() => i18n.changeLanguage('en')}>
                {t('btn.translate.english')}
            </button>
            <button type="button" onClick={() => i18n.changeLanguage('pt')}>
                {t('btn.translate.portuguese')}
            </button>
        </section>
    );
};

export default TranslateButtons;
