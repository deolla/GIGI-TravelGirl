import requests

url = "https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights"

querystring = {
    "sourceAirportCode": "NGN",
    "destinationAirportCode": "CAD",
    "date": "2024-03-28",
    "itineraryType": "ONE_WAY",
    "sortOrder": "ML_BEST_VALUE",
    "numAdults": "1",
    "numSeniors": "0",
    "classOfService": "ECONOMY",
    "pageNumber": "1",
    "currencyCode": "USD",
}

headers = {
    "X-RapidAPI-Key": "548cfcbe1dmsh18ea41532dc10aap166582jsn0691c70fb6aa",
    "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
print(response.status_code)
