const useGeo = (errHandler) => {
  if ('geolocation' in navigator) {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const {
            coords: { latitude: y, longitude: x },
          } = position;
          resolve({ x, y });
        },
        (e) => {
          alert('HTTPS 연결을 확인해주세요.');
          errHandler && errHandler();
        },
      );
    });
  }

  return { x: 126.9267506, y: 37.3595843 };
};

export default useGeo;
