import useSwr from "swr";

import fetcher from "@/lib/fetcher";

// react query 와 비슷한 역할을 함
// data가 있다면 다시 안 가져오게 하는
const useMovieList = () => {
    const { data, error, isLoading } = useSwr("/api/movies", fetcher, {
        // api 많이 안부르게 하는 옵션
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    return {
        data,
        error,
        isLoading,
    };
};

export default useMovieList;
