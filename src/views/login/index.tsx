import { useState, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import 'styling/form.css';

type loginFormat = {
    user: string;
    password: string;
};
type SetUser = React.Dispatch<React.SetStateAction<boolean>>;
type FormType = { setLogin: SetUser };

const Form: React.FC<FormType> = ({ setLogin }) => {
    const [t] = useTranslation();
    const [formData, setFormData] = useState<loginFormat>({
        user: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="user_input">
            <form
                className="user_input__form"
                onSubmit={e => {
                    e.preventDefault();
                    if (formData.user !== '' && formData.password !== '') {
                        setLogin(true);
                    }
                }}
            >
                <span>
                    <label htmlFor="name">{t('pages.form.user.title')}:</label>
                    <input
                        type="text"
                        placeholder={t('pages.form.user.placeholder')}
                        id="user"
                        name="user"
                        value={formData.user}
                        onChange={handleChange}
                        required
                        autoComplete="nothing"
                    />
                </span>

                <span>
                    <label htmlFor="surname">
                        {t('pages.form.password.title')}:
                    </label>
                    <input
                        type="password"
                        placeholder={t('pages.form.password.placeholder')}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        autoComplete="nothing"
                    />
                </span>

                <button type="submit">{t('btn.login')}</button>
            </form>
        </section>
    );
};

export default Form;
