# Information
This is a simple waifu lister that also has CRUD in it, made with the help of next js, bun runtime, and some other cool packages

# Running
- First, clone this github repo into your machine
- Second, make a `.env` file on the project's root with this format if you will use a database or just empty them all and set the `USE_DATABASE` variable value to false if you don't want to. This defaults to false  
```env
MYSQL_HOST=<Your database host>
MYSQL_USER=<Your database login user>
MYSQL_PASSWORD=<Your database login password>
MYSQL_DATABASE=<Your database name>
MYSQL_TABLE=<Your database table name>
USE_DATABASE=<Wether if you wanna use database or not>
```
- Third, install the needed packages for this project with the `bun install` command  
- Last, run this project with `bun run build && bun run start` or just run `bun run wetify` instead

# Images
You can just type the image link into the waifu form as usual or just place the image into the `public/images/waifus` folder and put the link in the form as `/images/waifus/<Your image file name and its extension>`

# Additional
It's better to see the page on 67% zoom level for better readability, and if you wanna add more things to this project just run the project as dev mode with `bun run dev` and just then you can start adding shits from here easily, feel free to also add more packages for your needs

# Bugs & Feature
If you found any bugs or have any feature ideas, feel free to open an issue about it here and explain how to reproduce the bug or explain your feature idea there. It will be good if you wanna do this

# Note
If you set the `USE_DATABASE` value to false then your current list won't be saved when you exit out of the web, if you want them to persist then consider using database instead
