import { useTranslation } from 'react-i18next';
import User from 'helpers/type/user';
import 'styling/revisited.css';

type TableType = { usersList: User[] };

const Revisited: React.FC<TableType> = ({ usersList }) => {
    const [t] = useTranslation();

    return (
        <section className="revisited_table">
            <table>
                <thead>
                    <tr>
                        <th>{t('pages.table.name')}</th>
                        <th>{t('pages.table.country')}</th>
                        <th>{t('pages.table.birthday')}</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList.map?.(user => {
                        return (
                            <tr
                                key={`${user.name} ${user.surname} ${user.country} ${user.birthday}`}
                                className="revisited_table__row__focus"
                            >
                                <td>{`${user.name} ${user.surname}`}</td>
                                <td>{user.country}</td>
                                <td>{user.birthday}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
    );
};

export default Revisited;
