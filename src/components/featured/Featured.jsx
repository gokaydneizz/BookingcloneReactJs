import useFetch from '../../hooks/useFetch';
import './featured.css';

const Featured = () => {
  const {data, loading, error} = useFetch(
    '/hotels/countByCity?cities=berlin,madrid,london'
  );

  return (
    <div className='featured'>
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          <div className='featuredItem'>
            <img
              src='https://blog.biletbayi.com/wp-content/uploads/2017/12/dublin-scaled.jpg'
              alt=''
            />
            <div className='featuredTitles'>
              <h1>Berlin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className='featuredItem'>
            <img
              src='https://purewows3.imgix.net/images/articles/2019_08/best-things-to-do-austin-barton-springs.jpg?auto=format,compress&cs=strip'
              alt=''
            />
            <div className='featuredTitles'>
              <h1>Madrid</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className='featuredItem'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/4/41/Reno_arch.jpg'
              alt=''
            />
            <div className='featuredTitles'>
              <h1>London</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
