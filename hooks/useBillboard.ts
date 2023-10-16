import useSwr from "swr";

import fetcher from "@/lib/fetcher";

// react query 와 비슷한 역할을 함
// data가 있다면 다시 안 가져오게 하는
const useBillboard = () => {
    const { data, error, isLoading } = useSwr("/api/random", fetcher, {
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

export default useBillboard;
