import useSWR from 'swr';

export function useUser () {
  const { data } = useSWR('https://jsonplaceholder.typicode.com/users', 
    ((url) => fetch(url).then((res) => res.json())));
  return data
}