import { useTranslation } from 'react-i18next';
import i18n from 'i18n';
import User from 'helpers/type/user';
import information from 'helpers/format/information';
import 'styling/table.css';

type SetMessage = React.Dispatch<React.SetStateAction<string>>;
type TableType = { usersList: User[]; setMessage: SetMessage };

const Table: React.FC<TableType> = ({ usersList, setMessage }) => {
    const [t] = useTranslation();

    return (
        <section className="show_table">
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
                                className="show_table__row__focus"
                                onClick={() => {
                                    const newMessage = information(
                                        user,
                                        i18n.language,
                                        t,
                                    );

                                    setMessage(newMessage);
                                }}
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

export default Table;
