import { useTranslation } from 'react-i18next';
import User from 'helpers/type/user';

type Information = (
    user: User,
    language: string,
    t: typeof useTranslation,
) => string;

const information: Information = (user, language, t) => {
    const datePart: string[] = user.birthday.split('/');
    const year: number = parseInt(datePart[2], 10);
    const month: number = parseInt(datePart[1], 10);
    const day: number = parseInt(datePart[0], 10);

    const date: Date = new Date();
    const currentYear: number = date.getFullYear();

    const formatter = new Intl.DateTimeFormat(language, { month: 'long' });
    const monthLong: string = formatter.format(new Date(year, month - 1, day));

    const age: number = currentYear - year;

    const hello = t('information.hello');
    const from = t('information.from');
    const on = t('information.on');
    const of = t('information.of');
    const you = t('information.you');
    const years = t('information.years');

    return `${hello} ${user.name} ${user.surname} ${from} ${user.country}${on} ${day} ${of} ${monthLong} ${you} ${age} ${years}`;
};

export default information;
