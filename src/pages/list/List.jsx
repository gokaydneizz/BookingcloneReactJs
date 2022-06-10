import './list.css';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import {useLocation} from 'react-router-dom';
import {format} from 'date-fns';
import {useState} from 'react';
import {DateRange} from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';
import useFetch from '../../hooks/useFetch';

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const {data, loading, error, reFetch} = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <div className='lsTitle'>Search</div>
            <div className='lsItem'>
              <label>Destination</label>
              <input
                placeholder={destination}
                onChange={e => setDestination(e.target.value)}
                type='text'
              />
            </div>
            <div className='lsItem'>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                'MM/dd/yyyy'
              )} to ${format(dates[0].endDate, 'MM/dd/yyy')}`}</span>
              {openDate && (
                <DateRange
                  onChange={item => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className='lsItem'>
              <label>Options</label>
              <div className='lsOptions'>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Min price <small>per night</small>{' '}
                  </span>
                  <input
                    type='number'
                    onChange={e => setMin(e.target.value)}
                    min={1}
                    className='lsOptionInput'
                  />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Max price <small>per night</small>
                  </span>
                  <input
                    type='number'
                    onChange={e => setMax(e.target.value)}
                    min={1}
                    className='lsOptionInput'
                  />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Adult </span>
                  <input
                    placeholder={options.adult}
                    type='number'
                    className='lsOptionInput'
                    min={1}
                  />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Children </span>
                  <input
                    placeholder={options.children}
                    type='number'
                    className='lsOptionInput'
                    min={0}
                  />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>Room </span>
                  <input
                    placeholder={options.room}
                    type='number'
                    className='lsOptionInput'
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className='listResult'>
            {loading ? (
              'loading'
            ) : (
              <>
                {data.map(item => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
