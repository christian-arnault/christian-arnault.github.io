angular.module('sophrologue', ['ngMaterial'])
    .controller('LandingCtrl', function($scope, $mdSidenav) {
        $scope.seances = [
            {
                title: 'Amélioration du quotidien',
                to: '#amelioration-quotidien',
                needs: [
                    'Gestion du stress et de ses conséquences',
                    'Troubles du sommeil',
                    'Anxiété',
                    'Manque de confiance en soi'
                ]
            },
            {
                title: 'Préparer un évènement',
                to: '#preparer-evenement',
                needs: [
                    'Accouchement', 
                    'Examens', 
                    'Epreuves',
                    'Professionnelles'
                ]
            },
            {
                title: 'Mieux vivre son traitement médical',
                to: '#traitement-medical',
                needs: [
                    'Gestion de la douleur', 
                    'Des effets secondaires'
                ]
            },
            {
                title: 'Gérer ses pulsions et ses addictions',
                to: 'pulsions-addictions'
            }
        ]

        $scope.goTo = (tag) => {
            console.log('click', tag)
        }

        $scope.toggleSidenav = () => {
            $mdSidenav('right').toggle()
        }
    });