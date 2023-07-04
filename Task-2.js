class BaseApi {
  static BASE_URL = "https://jsonplaceholder.typicode.com";

  async getPosts(endpoint = "/posts") {
    const url = BaseApi.BASE_URL + endpoint;
    const response = await fetch(url);
    return response;
  }

  async sendPost(
    endpoint = "/posts",
    data = {
      id: Date.now(),
      body: "Body of sent post",
      title: "Sent Post",
      completed: true,
    }
  ) {
    const url = BaseApi.BASE_URL + endpoint;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }

  async putPost(
    endpoint = "/posts/",
    data = {
      body: "Body of put post",
      title: "Put Post",
      completed: true,
    },
    postId = "1"
  ) {
    const url = BaseApi.BASE_URL + endpoint + postId;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }

  async deletePost(endpoint = "/posts/", postId = "1") {
    const url = BaseApi.BASE_URL + endpoint + postId;
    const response = await fetch(url, {
      method: "DELETE",
    });
    return response;
  }
}

//Here is an example of how I then operate with data in a component.

//const baseApi = new BaseApi();

//const getDataFromApi = async () => {
//  const response = await baseApi.getPost();
//  try {
//    if (!response.ok) {
//      throw new Error(response.status.toString());
//    }
//    const data = await response.json();
//    setTodosData(data);
//  } catch (error) {
//    setError(error);
//  }
//};
