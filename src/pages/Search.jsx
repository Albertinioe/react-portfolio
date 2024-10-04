import { useParams } from "react-router-dom";
import { SearchPostList } from "@/layout/index.js";

const Search = () => {

    const params = useParams();

    return (
        <div className={'flex flex-col gap-8'}>
            <h2 className={'text-xl font-medium'}>Результаты поиска “{ params?.text }”</h2>
            <SearchPostList searchText={ params?.text } />
        </div>
    );
};

export default Search;
