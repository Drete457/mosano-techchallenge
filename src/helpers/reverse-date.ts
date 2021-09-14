type ReverseDate = (date: string) => string;

const reverseDate: ReverseDate = (date: string) => {
    const datePart = date.split('-');
    const year = datePart[0];
    const month = datePart[1];
    const day = datePart[2];

    return `${day}/${month}/${year}`;
};

export default reverseDate;
