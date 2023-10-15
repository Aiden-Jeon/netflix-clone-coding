import useSwr from "swr";

import fetcher from "@/lib/fetcher";

// react query 와 비슷한 역할을 함
// data가 있다면 다시 안 가져오게 하는
const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSwr("/api/current", fetcher);
    return {
        data,
        error,
        isLoading,
        mutate,
    };
};

export default useCurrentUser;
