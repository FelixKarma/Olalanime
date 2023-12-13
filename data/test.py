
from flask import Flask, request, jsonify
import psycopg2
from psycopg2 import sql
from flask_cors import CORS
import logging
import sys
import base64



# Enregistre les logs dans un fichier
logging.basicConfig(filename='flask.log', level=logging.DEBUG)



# Initialise Flask et crée une instance de la classe Flask
app = Flask(__name__)
CORS(app)  # Active CORS pour toutes les routes de l'application

app.logger.addHandler(logging.StreamHandler(sys.stdout))


@app.route('/upload_form', methods=['POST'])
def upload_form():
    try:
        # Récupérer les données du formulaire depuis la requête
        titreOriginal = request.form.get('titreOriginal')
        titreFrancais = request.form.get('titreFrancais')
        origine = request.form.get('origine')
        annee_de_diffusion = request.form.get('annee_de_diffusion')
        nombre_d_episode = request.form.get('nombre_d_episode')
        studio_animation = request.form.get('studio_animation')
        synob = request.form.get('synob')
        image = request.files['image']
        genre = request.form.get('genre')
        theme = request.form.get('thème')

        # Imprimer les valeurs pour vérification
        #print("Valeurs reçues pour upload_form:")
        #print("titreOriginal:", titreOriginal)
        #print("titreFrancais:", titreFrancais)
        #print("origine:", origine)
        #print("annee_de_diffusion:", annee_de_diffusion)
        #print("nombre_d_episode:", nombre_d_episode)
        #print("studio_animation:", studio_animation)
        #print("synob:", synob)
        #print("genre:", genre)
        #print("theme:", theme)
        #print("image", image)

        # Vérifier si le fichier a un nom non vide
        if image.filename == '':
            response = {'error': 'Nom de fichier image vide'}
            return jsonify(response), 400

        # Utiliser fcntl uniquement si le système d'exploitation n'est pas Windows
        if sys.platform != 'win32':
            # Votre code utilisant fcntl ici
            pass

        # Connexion à la base de données PostgreSQL
        conn = psycopg2.connect(
            host='localhost',
            database='postgres',
            user='postgres',
            password='admin',
            port=5432  # Utilisez le port par défaut de PostgreSQL
        )
        cursor = conn.cursor()

        # Utilisez une requête INSERT pour insérer les données dans la table
        insert_query = sql.SQL("""
            INSERT INTO formulaire (titreOriginal, titreFrancais, origine, annee_de_diffusion, nombre_d_episode, studio_animation, synob, theme, genre, img)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """)
        cursor.execute(insert_query, (titreOriginal, titreFrancais, origine, annee_de_diffusion,
                       nombre_d_episode, studio_animation, synob, theme, genre, image.read()))

        # Commit et fermer la connexion
        conn.commit()
        conn.close()

        # Réponse réussie
        response = {
            'message': 'Données enregistrées avec succès dans la base de données !'}
        return jsonify(response), 200
    except Exception as e:
        # Affiche les erreurs spécifiques
        print(f"An error occurred: {str(e)}")
        # En cas d'erreur, renvoyer une réponse d'erreur
        response = {'error': str(e)}
        return jsonify(response), 500







@app.route('/get_data', methods=['GET'])
def get_data():
    try:
        # Connexion à la base de données PostgreSQL
        conn = psycopg2.connect(
            host='localhost',
            database='postgres',
            user='postgres',
            password='admin',
            port=5432
        )
        cursor = conn.cursor()

        # Utilisez une requête SELECT pour récupérer les données de la table
        select_query = "SELECT * FROM formulaire"
        cursor.execute(select_query)
        data = cursor.fetchall()
        #print(data)
        # Créez une liste de dictionnaires à partir des données
        result = []
        columns = [desc[0] for desc in cursor.description]
        for row in data:
            row_dict = dict(zip(columns, row))
            # Convertir la colonne img en Base64
            row_dict['img'] = base64.b64encode(row_dict['img']).decode('utf-8')
            result.append(row_dict)

        # Fermez la connexion à la base de données
        conn.close()

        # Imprimer les données récupérées
        #print("Données récupérées depuis la base de données:")

        # Renvoyez les données au format JSON
        return jsonify(result), 200

    except Exception as e:
        app.logger.error(f"An error occurred: {str(e)}")
        response = {'error': str(e)}
        return jsonify(response), 500

# Si le script est exécuté directement, lancez le serveur Flask
if __name__ == '__main__':
    app.run(port=5000)