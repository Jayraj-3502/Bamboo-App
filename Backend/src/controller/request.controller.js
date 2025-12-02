// Send Request
export async function sendRequest(req, res) {
  try {
    // user loggin verification
    // destructure required details from body
    // check that reciever profile exist or not
    // if profile not exist then throw error
    // if exist then cretea a request
    // check request created or not. if not then throw error
    // send response to the user
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

// Accept Request
export async function acceptRequest(req, res) {
  try {
    // user loggin verification
    // destructure required details from body
    // check request sender profile exist or not
    // if profile not exist then throw error
    // if exist then update the request
    // check request updated or not. If not then throw error
    // send responce to the user
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}

// Reject Request
export async function rejectRequest(req, res) {
  try {
    // user loggin verification
    // destructure required details from body
    // check request sender profile exist or not
    // if profile not exist then throw error
    // if exist then update the request
    // check request updated or not. If not then throw error
    // send responce to the user
  } catch (error) {
    ApiError({ res, statusCode: 500, error });
  }
}
