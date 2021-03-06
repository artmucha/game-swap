import fs from 'fs';
import https from 'https';

import dbConnect from 'utils/dbConnect';
import Game from 'models/Game';
import validator from 'utils/formValidators';

dbConnect();

const download = (url, dest) => {
  var file = fs.createWriteStream(dest);
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close(() => {
        console.log('success');
      });
    });
  });

  return file.path;
}

export default async (req, res) => {
  const { method } = req;

  switch(method) {
    case 'GET':
      try {
        const games = await Game.find({});
        res.status(200).json({success: true, data: games});
      } catch(error) {
        res.status(400).json({success: false, errors: {message}});
      }
      break;
    case 'POST':
      try {

        if(fs.existsSync(`./public/media/games/covers/${req.body.slug}.jpg`)) {
          req.body.cover  = `/media/games/covers/${req.body.slug}.jpg`;
        } else {
          const cover = download(req.body.cover, `./public/media/games/covers/${req.body.slug}.jpg`);
          req.body.cover = cover.slice(8);
        }

        const images = req.body.images.map(({id, image}) => {
          image = download(image, `./public/media/games/images/${req.body.slug}-${id}.jpg`);
          image = image.slice(8);
          return {
            id: id,
            image: image
          };
        });

        req.body.images = images;

        const game = await Game.create(req.body);
        res.status(201).json({success: true, data: game});
      } catch (error) {
        validator(error, res);
      }
      break;
    default: 
      res.status(400).json({success: false});
      break;
  }
};