LOCAL_FOLDER=""
LOCAL_FOLDER="$LOCAL_FOLDER dist/"
LOCAL_FOLDER="$LOCAL_FOLDER server.js"
LOCAL_FOLDER="$LOCAL_FOLDER package.json"

REMOTE_FOLDER="/opt/loja"
USER="root"
ADDRESS="31.220.109.164"

echo ===================
echo Publishing Site
echo ===================


echo ===================
echo RUNNING GULP
echo ===================
cd ../site
npm run build:aws

echo ===================
echo PUBLISHING
echo ===================

scp -v -r $LOCAL_FOLDER $USER@$ADDRESS:$REMOTE_FOLDER

echo -------------------
echo Finished
