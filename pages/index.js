import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data-firebase';

// define a getStaticProps() function - this name is defined by next.js
export async function getStaticProps() {
  const allData = await getSortedList();
  return {
    props: { allData },
  };
}

// export our home page component Home
export default function Home({ allData }) {
  return (
    <Layout home>
      <h1>List of Names</h1>
      <p role={'link'}>Popular people</p>
      <div className="list-group">
        {allData &&
          allData.map(({ id, name }) => (
            <Link
              key={id}
              href={`/persons/${id}`}
              className="list-group-item list-group-item-action"
            >
              {name}
            </Link>
          ))}
      </div>
    </Layout>
  );
}
