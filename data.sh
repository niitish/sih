#!/bin/bash
curl https://mausam.imd.gov.in/imd_latest/contents/districtwise-warning.php -o data.php
sed -n '469, 4856p' data.php > data.json
sed -i '1d' data.json
sed -i '1i[' data.json
sed -i '$d' data.json
sed -i '$a]' data.json
