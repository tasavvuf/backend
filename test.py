
import requests
from bs4 import BeautifulSoup

def print_message(url):

    response = requests.get(url)

    soup = BeautifulSoup(response.text, "html.parser")

    rows = soup.find_all("tr")

    data = []

    for row in rows[1:]:

        cols = row.find_all("td")

        if len(cols) >= 3:

            x = int(cols[0].text.strip())
            char = cols[1].text.strip()
            y = int(cols[2].text.strip())

            data.append((x, y, char))

    max_x = 0
    max_y = 0

    for x, y, char in data:

        if x > max_x:
            max_x = x

        if y > max_y:
            max_y = y

    grid = []

    for i in range(max_y + 1):

        row = []

        for j in range(max_x + 1):
            row.append(" ")

        grid.append(row)

    for x, y, char in data:
        grid[y][x] = char

    for row in grid:
        print("".join(row))


print_message("https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub")

