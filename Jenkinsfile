
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/mahmoudtarek3500/cicd-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cicd-node-app:latest .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKERHUB_USER',
                    passwordVariable: 'DOCKERHUB_TOKEN'
                )]) {
                    sh '''
                        echo "$DOCKERHUB_TOKEN" | docker login -u "$DOCKERHUB_USER" --password-stdin
                        docker tag cicd-node-app:latest "$DOCKERHUB_USER/cicd-node-app:latest"
                        docker push "$DOCKERHUB_USER/cicd-node-app:latest"
                        docker logout
                    '''
                }
            }
        }

        stage('Build Info') {
            steps {
                echo 'CI Pipeline completed successfully!'
            }
        }
    }
}
