// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
//  31998b87
// `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

/*
{
    "name": "Lima",
    "local_names": {
        "en": "Lima"
    },
    "lat": 40.7399785,
    "lon": -84.105006,
    "country": "US",
    "state": "Ohio"
}

CURRENT
{
    "coord": {
        "lon": -77.0365,
        "lat": -12.0621
    },
    "weather": [
        {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 297.41,
        "feels_like": 297.8,
        "temp_min": 297.41,
        "temp_max": 297.41,
        "pressure": 1013,
        "humidity": 73
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.63,
        "deg": 200
    },
    "clouds": {
        "all": 20
    },
    "dt": 1705250560,
    "sys": {
        "type": 1,
        "id": 8682,
        "country": "PE",
        "sunrise": 1705229638,
        "sunset": 1705275579
    },
    "timezone": -18000,
    "id": 3930376,
    "name": "Rímac",
    "cod": 200
}

FORECAST

{
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1705255200,
            "main": {
                "temp": 297.41,
                "feels_like": 297.8,
                "temp_min": 297.41,
                "temp_max": 297.76,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 995,
                "humidity": 73,
                "temp_kf": -0.35
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 20
            },
            "wind": {
                "speed": 4.8,
                "deg": 197,
                "gust": 4.12
            },
            "visibility": 10000,
            "pop": 0.12,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-14 18:00:00"
        },
        {
            "dt": 1705266000,
            "main": {
                "temp": 297.43,
                "feels_like": 297.82,
                "temp_min": 297.43,
                "temp_max": 297.48,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 993,
                "humidity": 73,
                "temp_kf": -0.05
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 41
            },
            "wind": {
                "speed": 4.72,
                "deg": 189,
                "gust": 4.18
            },
            "visibility": 10000,
            "pop": 0.23,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-14 21:00:00"
        },
        {
            "dt": 1705276800,
            "main": {
                "temp": 296.42,
                "feels_like": 296.84,
                "temp_min": 295.92,
                "temp_max": 296.42,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 995,
                "humidity": 78,
                "temp_kf": 0.5
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 3.28,
                "deg": 188,
                "gust": 3.36
            },
            "visibility": 10000,
            "pop": 0.23,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-15 00:00:00"
        },
        {
            "dt": 1705287600,
            "main": {
                "temp": 295.37,
                "feels_like": 295.79,
                "temp_min": 295.37,
                "temp_max": 295.37,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 997,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.29,
                "deg": 168,
                "gust": 3.54
            },
            "visibility": 10000,
            "pop": 0.3,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-15 03:00:00"
        },
        {
            "dt": 1705298400,
            "main": {
                "temp": 294.77,
                "feels_like": 295.18,
                "temp_min": 294.77,
                "temp_max": 294.77,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 996,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.34,
                "deg": 167,
                "gust": 3.37
            },
            "visibility": 10000,
            "pop": 0.2,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-15 06:00:00"
        },
        {
            "dt": 1705309200,
            "main": {
                "temp": 294.55,
                "feels_like": 294.94,
                "temp_min": 294.55,
                "temp_max": 294.55,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 995,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 96
            },
            "wind": {
                "speed": 3.51,
                "deg": 167,
                "gust": 3.37
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-15 09:00:00"
        },
        {
            "dt": 1705320000,
            "main": {
                "temp": 294.58,
                "feels_like": 294.97,
                "temp_min": 294.58,
                "temp_max": 294.58,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 996,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 3.21,
                "deg": 172,
                "gust": 3.17
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-15 12:00:00"
        },
        {
            "dt": 1705330800,
            "main": {
                "temp": 295.96,
                "feels_like": 296.31,
                "temp_min": 295.96,
                "temp_max": 295.96,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 996,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.55,
                "deg": 186,
                "gust": 3.2
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-15 15:00:00"
        },
        {
            "dt": 1705341600,
            "main": {
                "temp": 297.02,
                "feels_like": 297.34,
                "temp_min": 297.02,
                "temp_max": 297.02,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 994,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.17,
                "deg": 189,
                "gust": 3.65
            },
            "visibility": 10000,
            "pop": 0.12,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-15 18:00:00"
        },
        {
            "dt": 1705352400,
            "main": {
                "temp": 296.21,
                "feels_like": 296.58,
                "temp_min": 296.21,
                "temp_max": 296.21,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 993,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.7,
                "deg": 188,
                "gust": 3.32
            },
            "visibility": 10000,
            "pop": 0.16,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-15 21:00:00"
        },
        {
            "dt": 1705363200,
            "main": {
                "temp": 295.83,
                "feels_like": 296.24,
                "temp_min": 295.83,
                "temp_max": 295.83,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 994,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 3.03,
                "deg": 181,
                "gust": 2.93
            },
            "visibility": 10000,
            "pop": 0.16,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-16 00:00:00"
        },
        {
            "dt": 1705374000,
            "main": {
                "temp": 295.49,
                "feels_like": 295.92,
                "temp_min": 295.49,
                "temp_max": 295.49,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 996,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 86
            },
            "wind": {
                "speed": 2.4,
                "deg": 175,
                "gust": 2.48
            },
            "visibility": 10000,
            "pop": 0.03,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-16 03:00:00"
        },
        {
            "dt": 1705384800,
            "main": {
                "temp": 294.75,
                "feels_like": 295.21,
                "temp_min": 294.75,
                "temp_max": 294.75,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 995,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 93
            },
            "wind": {
                "speed": 3.14,
                "deg": 172,
                "gust": 3.11
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-16 06:00:00"
        },
        {
            "dt": 1705395600,
            "main": {
                "temp": 294.64,
                "feels_like": 295.09,
                "temp_min": 294.64,
                "temp_max": 294.64,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 994,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.59,
                "deg": 167,
                "gust": 2.57
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-16 09:00:00"
        },
        {
            "dt": 1705406400,
            "main": {
                "temp": 294.88,
                "feels_like": 295.33,
                "temp_min": 294.88,
                "temp_max": 294.88,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 995,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.64,
                "deg": 171,
                "gust": 2.78
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-16 12:00:00"
        },
        {
            "dt": 1705417200,
            "main": {
                "temp": 296.75,
                "feels_like": 297.15,
                "temp_min": 296.75,
                "temp_max": 296.75,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 995,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 60
            },
            "wind": {
                "speed": 3.32,
                "deg": 188,
                "gust": 2.92
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-16 15:00:00"
        },
        {
            "dt": 1705428000,
            "main": {
                "temp": 298.27,
                "feels_like": 298.67,
                "temp_min": 298.27,
                "temp_max": 298.27,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 993,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 49
            },
            "wind": {
                "speed": 5.19,
                "deg": 193,
                "gust": 4.3
            },
            "visibility": 10000,
            "pop": 0.12,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-16 18:00:00"
        },
        {
            "dt": 1705438800,
            "main": {
                "temp": 297.8,
                "feels_like": 298.2,
                "temp_min": 297.8,
                "temp_max": 297.8,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 992,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 27
            },
            "wind": {
                "speed": 5.46,
                "deg": 183,
                "gust": 5.05
            },
            "visibility": 10000,
            "pop": 0.2,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-16 21:00:00"
        },
        {
            "dt": 1705449600,
            "main": {
                "temp": 296.06,
                "feels_like": 296.5,
                "temp_min": 296.06,
                "temp_max": 296.06,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 994,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 36
            },
            "wind": {
                "speed": 3.96,
                "deg": 172,
                "gust": 4.07
            },
            "visibility": 10000,
            "pop": 0.23,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-17 00:00:00"
        },
        {
            "dt": 1705460400,
            "main": {
                "temp": 295.1,
                "feels_like": 295.54,
                "temp_min": 295.1,
                "temp_max": 295.1,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 996,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.92,
                "deg": 169,
                "gust": 4.26
            },
            "visibility": 10000,
            "pop": 0.27,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-17 03:00:00"
        },
        {
            "dt": 1705471200,
            "main": {
                "temp": 295.14,
                "feels_like": 295.54,
                "temp_min": 295.14,
                "temp_max": 295.14,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 994,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.37,
                "deg": 168,
                "gust": 3.47
            },
            "visibility": 10000,
            "pop": 0.24,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-17 06:00:00"
        },
        {
            "dt": 1705482000,
            "main": {
                "temp": 294.61,
                "feels_like": 295,
                "temp_min": 294.61,
                "temp_max": 294.61,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 993,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.33,
                "deg": 178,
                "gust": 2.26
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-17 09:00:00"
        },
        {
            "dt": 1705492800,
            "main": {
                "temp": 294.92,
                "feels_like": 295.29,
                "temp_min": 294.92,
                "temp_max": 294.92,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 994,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.49,
                "deg": 173,
                "gust": 2.56
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-17 12:00:00"
        },
        {
            "dt": 1705503600,
            "main": {
                "temp": 296.43,
                "feels_like": 296.8,
                "temp_min": 296.43,
                "temp_max": 296.43,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 995,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.13,
                "deg": 206,
                "gust": 2.57
            },
            "visibility": 10000,
            "pop": 0.07,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-17 15:00:00"
        },
        {
            "dt": 1705514400,
            "main": {
                "temp": 297.41,
                "feels_like": 297.77,
                "temp_min": 297.41,
                "temp_max": 297.41,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 994,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 91
            },
            "wind": {
                "speed": 4.22,
                "deg": 206,
                "gust": 3.39
            },
            "visibility": 10000,
            "pop": 0.12,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-17 18:00:00"
        },
        {
            "dt": 1705525200,
            "main": {
                "temp": 297.14,
                "feels_like": 297.5,
                "temp_min": 297.14,
                "temp_max": 297.14,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 993,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 4.28,
                "deg": 191,
                "gust": 3.77
            },
            "visibility": 10000,
            "pop": 0.2,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-17 21:00:00"
        },
        {
            "dt": 1705536000,
            "main": {
                "temp": 295.71,
                "feels_like": 296.16,
                "temp_min": 295.71,
                "temp_max": 295.71,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 994,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 94
            },
            "wind": {
                "speed": 2.74,
                "deg": 165,
                "gust": 2.85
            },
            "visibility": 10000,
            "pop": 0.35,
            "rain": {
                "3h": 1.64
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-18 00:00:00"
        },
        {
            "dt": 1705546800,
            "main": {
                "temp": 295.42,
                "feels_like": 295.87,
                "temp_min": 295.42,
                "temp_max": 295.42,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 996,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.5,
                "deg": 164,
                "gust": 3.95
            },
            "visibility": 10000,
            "pop": 0.38,
            "rain": {
                "3h": 1.93
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-18 03:00:00"
        },
        {
            "dt": 1705557600,
            "main": {
                "temp": 294.91,
                "feels_like": 295.36,
                "temp_min": 294.91,
                "temp_max": 294.91,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 995,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.55,
                "deg": 169,
                "gust": 3.7
            },
            "visibility": 10000,
            "pop": 0.28,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-18 06:00:00"
        },
        {
            "dt": 1705568400,
            "main": {
                "temp": 294.91,
                "feels_like": 295.33,
                "temp_min": 294.91,
                "temp_max": 294.91,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 994,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.39,
                "deg": 171,
                "gust": 2.38
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-18 09:00:00"
        },
        {
            "dt": 1705579200,
            "main": {
                "temp": 294.91,
                "feels_like": 295.36,
                "temp_min": 294.91,
                "temp_max": 294.91,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 995,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.9,
                "deg": 169,
                "gust": 3.01
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-18 12:00:00"
        },
        {
            "dt": 1705590000,
            "main": {
                "temp": 296.45,
                "feels_like": 296.87,
                "temp_min": 296.45,
                "temp_max": 296.45,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 996,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 85
            },
            "wind": {
                "speed": 3.52,
                "deg": 183,
                "gust": 3.28
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-18 15:00:00"
        },
        {
            "dt": 1705600800,
            "main": {
                "temp": 297.53,
                "feels_like": 297.93,
                "temp_min": 297.53,
                "temp_max": 297.53,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 994,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 79
            },
            "wind": {
                "speed": 4.29,
                "deg": 197,
                "gust": 3.68
            },
            "visibility": 10000,
            "pop": 0.16,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-18 18:00:00"
        },
        {
            "dt": 1705611600,
            "main": {
                "temp": 297.57,
                "feels_like": 297.97,
                "temp_min": 297.57,
                "temp_max": 297.57,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 993,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 66
            },
            "wind": {
                "speed": 4.62,
                "deg": 190,
                "gust": 4.15
            },
            "visibility": 10000,
            "pop": 0.23,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-18 21:00:00"
        },
        {
            "dt": 1705622400,
            "main": {
                "temp": 296.58,
                "feels_like": 297.04,
                "temp_min": 296.58,
                "temp_max": 296.58,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 994,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 82
            },
            "wind": {
                "speed": 4.59,
                "deg": 172,
                "gust": 4.63
            },
            "visibility": 10000,
            "pop": 0.34,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-19 00:00:00"
        },
        {
            "dt": 1705633200,
            "main": {
                "temp": 295.58,
                "feels_like": 296.07,
                "temp_min": 295.58,
                "temp_max": 295.58,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 995,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.29,
                "deg": 171,
                "gust": 3.51
            },
            "visibility": 10000,
            "pop": 0.28,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-19 03:00:00"
        },
        {
            "dt": 1705644000,
            "main": {
                "temp": 295.25,
                "feels_like": 295.74,
                "temp_min": 295.25,
                "temp_max": 295.25,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 994,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.17,
                "deg": 166,
                "gust": 3.44
            },
            "visibility": 10000,
            "pop": 0.22,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-19 06:00:00"
        },
        {
            "dt": 1705654800,
            "main": {
                "temp": 295.32,
                "feels_like": 295.79,
                "temp_min": 295.32,
                "temp_max": 295.32,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 993,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.48,
                "deg": 169,
                "gust": 2.71
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-19 09:00:00"
        },
        {
            "dt": 1705665600,
            "main": {
                "temp": 295.38,
                "feels_like": 295.85,
                "temp_min": 295.38,
                "temp_max": 295.38,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 995,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.37,
                "deg": 166,
                "gust": 2.55
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-19 12:00:00"
        },
        {
            "dt": 1705676400,
            "main": {
                "temp": 296.88,
                "feels_like": 297.32,
                "temp_min": 296.88,
                "temp_max": 296.88,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 995,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.21,
                "deg": 189,
                "gust": 2.72
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-19 15:00:00"
        }
    ],
    "city": {
        "id": 3930376,
        "name": "Rímac",
        "coord": {
            "lat": -12.0621,
            "lon": -77.0365
        },
        "country": "PE",
        "population": 0,
        "timezone": -18000,
        "sunrise": 1705229638,
        "sunset": 1705275579
    }
}
*/
