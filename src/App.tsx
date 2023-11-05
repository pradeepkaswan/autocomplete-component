import { useEffect, useState } from "react";

function getAutocompleteResults(query: string): Promise<string[]> {
  const fruits = ['Apple', 'Banana', 'Kiwi'];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fruits.filter((fruit) => (
        fruit.toLowerCase().includes(query.toLowerCase())
      )))
    }, Math.random() * 1000);
  });
}

function App() {
  const [query, setQuery] = useState("")

  useEffect(() => {
    (async () => {
      if (!query) {
        return
      }
      const data = await getAutocompleteResults(query)
    })();
  }, [])

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-900">
      <input className="mt-24 mb-4" value={query} onChange={(e) => setQuery(e.target.value)} />
      <div className="text-gray-200 flex flex-col gap-2 items-start">
        Show results here
      </div>
    </div>
  );
}

export default App;
