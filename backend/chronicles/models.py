from backend import db


class Chronicles(db.Model):
    __tablename__ = 'chronicles'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String, primary_key=True)
    name = db.Column(db.String, primary_key=True)
    active = db.Column(db.Boolean, primary_key=True)
    comment = db.Column(db.String, primary_key=True)
    description = db.Column(db.String, primary_key=True)
    date = db.Column(db.String, primary_key=True)
    time = db.Column(db.String, primary_key=True)

    def __repr__(self):
        return f"Chronicles from {self.date} {self.time}."

    def serialize(self):
        return {
            'id': self.id,
            'url': self.url,
            'name': self.name,
            'active': self.active,
            'comment': self.comment,
            'description': self.description,
            'date': self.date,
            'time': self.time,
        }
