npm install express@4.13.2 --save


generate ssh key so it's easier to push to heroku and other places


go to ~/

to generate ssh:

ssh -keygen -t rsa -b 4096 -C "EmailAddress@gmail.com"

Then you can choose either to overwrite the file or not, which you dun have to

Enter passphrase, you have the option to enter the passphrase or not

---

Heroku instruction:

to create the app, you do

heroku create

then to open the app, do

heroku open

