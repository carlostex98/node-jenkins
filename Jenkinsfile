pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                sh 'echo "Instalando depencias"'
                sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Iniciando las pruebas"'
                sh 'node -v'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Creando las imagenes"'
                sh 'node index.js'
            }
        }
    }
    post {
        always {
            echo 'Se ha completado algo!'
        }

    }
        
}