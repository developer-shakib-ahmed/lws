import { useEffect, useState } from 'react';

export default function WorkWithUseEffect() {
  const [count, setCount] = useState(0);
  const [clock, setClock] = useState(new Date());

  const tick = () => {
    console.log('Clock ticking!');
    setClock(new Date());
  };

  // Run useEffect on every re-render time & first time reload
  useEffect(() => {
    // console.log('Run useEffect on every re-render time');
  });

  // Run useEffect on specific value or dependencies changed & first time reload
  useEffect(() => {
    document.title = `Clicked ${count} Times`;
    console.log('Title update');
  }, [count]);

  // Run useEffect on WorkWithUseEffect component will unmounted & first time reload
  useEffect(() => {
    console.log('Start Clock');
    const clockInterval = setInterval(tick, 1000);

    return () => {
      console.log('Component unmounted!');
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <>
      <p>Time: {clock.toLocaleTimeString()}</p>
      <p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>Click Me</button>
      </p>
    </>
  );
}
