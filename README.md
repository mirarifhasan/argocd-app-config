## My ArgoCD Learning

Before starting with ArgoCD, I needed to have a `docker image` (of any application) and basics knowledge on `kubernetes` (kubectl cmds).
Along with that, I needed to make kubernetes `deployment` and `service` files (before starting ArgoCD) for run the application/docker image.

Afterward during my ArgoCD learning, I made an `application.yaml` config file and apply in in the `Minikube`.
Sample `application.yaml` file is:
```
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: health-argo-application
  namespace: argocd
  
spec:
  project: default
  
  source:
    repoURL: https://github.com/mirarifhasan/argocd-app-config.git
    targetRevision: HEAD
    path: deployments
    
  destination:
    server: https://kubernetes.default.svc
    namespace: new-namespace
    
  syncPolicy:
    syncOptions:
      - CreateNamespace=true
    automated:
      selfHeal: true
      prune: true
```
