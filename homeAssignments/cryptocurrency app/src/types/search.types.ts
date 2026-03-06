type SetSearch = React.Dispatch<React.SetStateAction<string>>;

export interface SearchProps {
    value: string;
    handleChange: SetSearch;
    handleSearch: () => void;
};
