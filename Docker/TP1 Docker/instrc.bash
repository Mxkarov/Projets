#Creation d'une image depuis un container existant
docker commit <container_id/name> <image_name>

#lancer créa img
docker build -t <nom_image> .

# execute container
$ docker run --name=node_server_container -dp 8080:80 node_server


echo "<h1> j'ai modifié le message</h1>" > /usr/local/apache2/htdocs/index.html