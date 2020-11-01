export const getData = async (url, callback) => {
  try {
    const res = await fetch(`db/${url}`);

    if (!res.ok) {
      await Promise.reject({
        status: res.status,
        message: `${res.statusText}: ${res.url}`,
      });
    }

    callback(await res.json());
  }
  catch (error) {
    throw error;
  }
};
