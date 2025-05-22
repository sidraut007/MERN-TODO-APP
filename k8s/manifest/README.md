## HOW TO RUN USING K8S MANIFEST:
```bash
     k apply -f secret.yaml
     k apply -f .
```
- As we are using Kind cluster on docker desktop so we have to do port-forwading

```bash
    kubectl port-forward svc/frontend 80:80
    kubectl port-forward svc/backend 8080:8080
```