import useSWR from 'swr';

export function usePhoto () {
  const { data } = useSWR('https://jsonplaceholder.typicode.com/photos', 
    ((url) => fetch(url).then((res) => res.json())));
  return data
}