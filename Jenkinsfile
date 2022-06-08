pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'echo "Instalando depencias"'
                sleep 15
                sh 'echo "Dependencias instaladas"'
                sh 'echo "******************************"'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Iniciando las pruebas"'
                sleep 35
                sh 'echo "Pruebas realizadas"'
                sh 'echo "******************************"'
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Creando las imagenes'
                sleep 10
                sh 'echo "Imagenes creadas"'
                sh 'echo "******************************"'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Lanzando a produccion"'
                sleep 10
                sh 'echo "Sistema en linea"'
            }
        }
    }
    post {
        always {
            echo 'Se ha completado algo!'
        }
        
}