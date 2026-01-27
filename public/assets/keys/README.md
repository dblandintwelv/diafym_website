# 🔐 Clés de chiffrement SSO

## 📁 Fichiers à placer ici :

Votre CTO doit placer les 4 fichiers de clés dans ce dossier :

1. **`rsa_public.pem`** - Clé publique RSA pour chiffrer les données
2. **`rsa_private.pem`** - Clé privée RSA (pour déchiffrement côté plateforme)
3. **`ec_public.pem`** - Clé publique EC (optionnel)
4. **`ec_private.pem`** - Clé privée EC (optionnel)

## 🔄 Flux de chiffrement :

1. **Twelv** charge `rsa_public.pem` depuis `/assets/keys/rsa_public.pem`
2. **Twelv** chiffre les données SSO avec la clé publique
3. **Plateforme** reçoit les données chiffrées
4. **Plateforme** déchiffre avec `rsa_private.pem`

## ⚠️ Important :

- Les clés privées ne doivent **JAMAIS** être sur le serveur Twelv
- Seule la clé publique est utilisée côté Twelv
- Les clés privées restent sur les plateformes clientes
