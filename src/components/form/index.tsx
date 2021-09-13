import { useTranslation } from 'react-i18next';
import 'styling/form.css';

const Form: React.FC = () => {
    const [t] = useTranslation();

    return (
        <section className="user_input">
            <form className="user_input__form">
                <span>
                    <label htmlFor="name">{t('pages.form.name.title')}:</label>
                    <input
                        type="text"
                        placeholder={t('pages.form.name.placeholder')}
                        id="name"
                        name="name"
                    />
                </span>

                <span>
                    <label htmlFor="surname">
                        {t('pages.form.surname.title')}:
                    </label>
                    <input
                        type="text"
                        placeholder={t('pages.form.surname.placeholder')}
                        id="surname"
                        name="surname"
                    />
                </span>

                <span>
                    <label htmlFor="countries">
                        {t('pages.form.countries.title')}:
                    </label>
                    <input
                        list="countriesList"
                        placeholder={t('pages.form.countries.placeholder')}
                        id="countries"
                        name="countries"
                    />
                </span>

                <span>
                    <label htmlFor="birthday">
                        {t('pages.form.birthday.title')}:
                    </label>
                    <input type="date" id="birthday" name="birthday" />
                </span>

                <button type="submit">{t('btn.save')}</button>
            </form>
        </section>
    );
};

export default Form;
