import requests
import fetch

# # Make the same request we did two screens ago.
# parameters = {'lat': 37.78, 'lon': -122.41}
# response = requests.get('http://api.open-notify.org/iss-duration.json', params=parameters)
#
# # Get the response data as a Python object.  Verify that it's a dictionary.
# json_data = response.json()
# print(type(json_data))
# print(json_data)

const
fetch('https://api.bird.co/user/login')
    .then(res= > res.json())


var data = {username: 'example'};


    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Device-id': '<GUID>',
        'Platform': 'ios',
        'Content-Type': 'application/json'
    }


